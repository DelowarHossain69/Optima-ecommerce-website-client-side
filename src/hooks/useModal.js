import Swal from "sweetalert2";


const useModal = () => {

    // Confirm modal
    function confirmModal(cb){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             // 
              cb();

            }
          })
    }

    // Confirm modal with success alert
    function confirmModalWithSuccessAlert(cb){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                // Call back function
                cb();

              Swal.fire(
                'Deleted!',
                'Delete successfully',
                'success'
              )
            }
          })
    }

    return {
        confirmModal,
        confirmModalWithSuccessAlert
    }
};

export default useModal;