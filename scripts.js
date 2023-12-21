if (pdfjsLib && pdfjsLib.getDocument) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

    var url = './[PHB] One Piece Dungeons and Devil Fruits (5e System).pdf'; // Path to your PDF
    var pdfDoc = null;
    var currentPageNumber = 1;
    var scale = 1.5; // Adjust the scale as needed

    // Asynchronous download of PDF
    var loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then(function(pdf) {
        console.log('PDF loaded');
        pdfDoc = pdf;
        renderPage(currentPageNumber);
    }, function (reason) {
        // PDF loading error
        console.error(reason);
    });

    function renderPage(pageNum) {
        pdfDoc.getPage(pageNum).then(function(page) {
            console.log('Page loaded');
            
            var viewport = page.getViewport({scale: scale});
            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Render PDF page into canvas context
            var renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            var renderTask = page.render(renderContext);
            renderTask.promise.then(function () {
                console.log('Page rendered');
            });

            // Clear existing content and append the new canvas
            var container = document.getElementById('pdf-renderer');
            container.innerHTML = '';
            container.appendChild(canvas);
        });
    }

    // Event listeners for the buttons
    document.getElementById('prev-page').addEventListener('click', () => {
        if (currentPageNumber < 1) {
            currentPageNumber = pdfDoc.numPages;            
        } else {
            currentPageNumber--;
        }
        renderPage(currentPageNumber);
    });

    document.getElementById('next-page').addEventListener('click', () => {
        if (currentPageNumber > pdfDoc.numPages) {
            currentPageNumber = 1;
        } else {
            currentPageNumber++;
        }
        renderPage(currentPageNumber);
    });
} else {
    console.error('PDF.js library is not loaded.');
}

document.getElementById('download-pdf').addEventListener('click', function() {
    var link = document.createElement('a');
    link.href = './[PHB] One Piece Dungeons and Devil Fruits (5e System).pdf';
    link.download = 'Dungeons and Devil Fruits Handbook.pdf'; // Optional: specify a filename for the downloaded file
    link.click();
});

