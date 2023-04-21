function downloadFYP() {
    var url = 'docs/LeeChengZhan_FPY.pdf'; // Replace with the URL of the file you want to download
    var filename = 'LeeChengZhan_FPY.pdf'; // Replace with the filename and file extension of the file you want to download
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}