
import Swal from 'sweetalert2';

export function handelDelete({onDelete}) {
    Swal.fire({
        title: "هل أنت متأكد؟",
        text: "لن تتمكن من التراجع عن هذا!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText:"إلغاء",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "نعم، احذفها!"
    }).then((result) => {
        if (result.isConfirmed) {
            onDelete()
            Swal.fire({
                title: "تم الحذف!",
                text: "تم حذف ملفك.",
                icon: "success"
            });
        }
    });
    
}