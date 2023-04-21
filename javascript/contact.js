function downloadCV() {
    var url = 'docs/LeeChengZhan_Resume_Mar2023.docx'; // Replace with the URL of the file you want to download
    var filename = 'LeeChengZhan_Resume_Mar2023.docx'; // Replace with the filename and file extension of the file you want to download
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}