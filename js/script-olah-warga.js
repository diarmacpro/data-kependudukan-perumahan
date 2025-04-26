function togleModal(id,aksi){
  if(aksi == 'show'){
    $(`#${id}`).removeClass('hidden');
  }else if (aksi == 'hide'){
    $(`#${id}`).addClass('hidden');
  }
}

function ambilDataForm() {
  const data = {};
  $('input[name], select[name], textarea[name]').each(function () {
    const name = $(this).attr('name');
    let value = $(this).val().trim();

    // Khusus untuk nomor_hp
    if (name === 'nomor_hp') {
      data[name] = value.includes(',') ? value.split(',').map(v => v.trim()) : [value];
    } else {
      data[name] = value;
    }
  });
  fx.iDtKy('perumahan/warga',data,()=>{});
  console.log(data);
}

$(document).on('click', 'button:contains("Kirim")', function () {
  ambilDataForm();
});

$(()=>{
  $('#btnStepB').click(function(){
    $('#btnStepA').removeClass('disabled:opacity-50 disabled:cursor-not-allowed');
    $('.form-step-1').addClass('hidden');
    $('.form-step-2').removeClass('hidden');
    $(this).text('Kirim');
  })
  $('#btnStepB').click(function(){
    $('#btnStepA').removeClass('disabled:opacity-50 disabled:cursor-not-allowed');
    $('.form-step-1').addClass('hidden');
    $('.form-step-2').removeClass('hidden');
  })
})