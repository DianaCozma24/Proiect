function store(){

  var name = document.getElementById('name');
  var pw = document.getElementById('pw');
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;

  if(name.value.length == 0){
      alert('Please fill in email');

  }else if(pw.value.length == 0){
      alert('Please fill in password');

  }else if(name.value.length == 0 && pw.value.length == 0){
      alert('Please fill in email and password');

  }else if(pw.value.length > 8){
      alert('Max of 8');

  }else if(!pw.value.match(numbers)){
      alert('please add 1 number');

  }else if(!pw.value.match(upperCaseLetters)){
      alert('please add 1 uppercase letter');

  }else if(!pw.value.match(lowerCaseLetters)){
      alert('please add 1 lovercase letter');

  }else{
      localStorage.setItem('name', name.value);
      localStorage.setItem('pw', pw.value);
      document.location.replace = 'http://localhost:5500';
  }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}