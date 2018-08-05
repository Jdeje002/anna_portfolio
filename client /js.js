
// nav bar logic
$('#navId a').click(e => {
    e.preventDefault();
    $(this).tab('show');
});

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })