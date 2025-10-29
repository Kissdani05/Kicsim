'use client';

import { useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function BookingModal() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const open = params.get('foglalas') === '1';

  const close = () => {
    const newParams = new URLSearchParams(params.toString());
    newParams.delete('foglalas');
    router.replace(`${pathname}${newParams.toString() ? `?${newParams}` : ''}`, { scroll: false });
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
      <div className="modal" role="dialog" aria-modal="true">
        <div className="modal-header">
          <h3 className="modal-title">Foglalás</h3>
          <button className="modal-close" aria-label="Bezárás" onClick={close}><i className="fas fa-times" /></button>
        </div>
        <div className="modal-body">
          <form className="booking-form" onSubmit={(e) => { e.preventDefault(); alert('Köszönjük a foglalást!'); close(); }}>
            <div className="form-group"><label>Név</label><input type="text" placeholder="Az Ön neve" required /></div>
            <div className="form-group"><label>Email cím</label><input type="email" placeholder="email@pelda.hu" required /></div>
            <div className="form-group"><label>Üzenet</label><textarea placeholder="Mire és mikorra foglalna?" required /></div>
            <button type="submit" className="btn-submit">Küldés</button>
          </form>
        </div>
      </div>
    </div>
  );
}
