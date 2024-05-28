document.getElementById('toggle-no').addEventListener('click', function() {
    document.querySelectorAll('.job-content.en').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.job-content.no').forEach(el => el.style.display = 'block');
});

document.getElementById('toggle-en').addEventListener('click', function() {
    document.querySelectorAll('.job-content.no').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.job-content.en').forEach(el => el.style.display = 'block');
});
