 'use client';

 import React from 'react';

 interface ConfirmDialogProps {
     open: boolean;
     title: string;
     message: React.ReactNode;
     confirmLabel?: string;
     cancelLabel?: string;
     confirming?: boolean;
     onConfirm: () => void | Promise<void>;
     onCancel: () => void;
 }

 const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
     open,
     title,
     message,
     confirmLabel = 'Confirm',
     cancelLabel = 'Cancel',
     confirming = false,
     onConfirm,
     onCancel
 }) => {
     if (!open) return null;

     return (
         <div
             className="modal-overlay"
             style={{
                 position: 'fixed',
                 top: 0,
                 left: 0,
                 width: '100%',
                 height: '100%',
                 background: 'rgba(0,0,0,0.65)',
                 zIndex: 1200,
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center'
             }}
         >
             <div className="card" style={{ width: '420px', margin: 0 }}>
                 <div className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                     <span
                         style={{
                             width: 22,
                             height: 22,
                             borderRadius: '999px',
                             background: 'var(--red-bg)',
                             color: 'var(--red)',
                             display: 'inline-flex',
                             alignItems: 'center',
                             justifyContent: 'center',
                             fontSize: 13,
                             fontWeight: 700
                         }}
                     >
                         !
                     </span>
                     <span>{title}</span>
                 </div>
                 <div style={{ fontSize: '13px', color: 'var(--text2)', marginBottom: '18px' }}>
                     {message}
                 </div>
                 <div className="btn-row" style={{ marginTop: '4px' }}>
                     <button
                         className="btn btn-secondary"
                         type="button"
                         onClick={onCancel}
                         disabled={confirming}
                     >
                         {cancelLabel}
                     </button>
                     <button
                         className="btn btn-primary"
                         type="button"
                         onClick={onConfirm}
                         disabled={confirming}
                         style={{ background: 'var(--red)', borderColor: 'var(--red)' }}
                     >
                         {confirming ? 'Working…' : confirmLabel}
                     </button>
                 </div>
             </div>
         </div>
     );
 };

 export default ConfirmDialog;

