public class Main2 {
    public static void main(String[] args) {
        System.out.println("--- Testing Factory Method Pattern Implementation ---");

        // Create a Word Document using Word Factory
        DocumentFactory wordFactory = new WordDocumentFactory();
        Document doc1 = wordFactory.createDocument();
        doc1.open();

        // Create a PDF Document using PDF Factory
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        Document doc2 = pdfFactory.createDocument();
        doc2.open();

        // Create an Excel Document using Excel Factory
        DocumentFactory excelFactory = new ExcelDocumentFactory();
        Document doc3 = excelFactory.createDocument();
        doc3.open();
    }
}
