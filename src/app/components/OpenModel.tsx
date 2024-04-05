// import { useEffect } from 'react';

// const ClientSideButton = () => {


//   useEffect(() => {
//     const openModal = () => {
//       const modal = document.getElementById('my_modal_1') as HTMLDialogElement | null;
//       if (modal) {
//         modal.showModal();
//       }
//     };
    
//     const button = document.getElementById('open_modal_button');
//     if (button) {
//       button.addEventListener('click', openModal);
//     }
    
//     return () => {
//       if (button) {
//         button.removeEventListener('click', openModal);
//       }
//     };
//   }, []);

//   return null;
// };

// export default ClientSideButton;
