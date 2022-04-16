function doGet(){
   var html=HtmlService.createTemplateFromFile("會員資料");
   var check=html.evaluate();
   var show =check.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
   return show;
   }


 // 新增資料到試算表
            
            function addData(rowData){
                //抓時間 
              var currentDate=new Date();
                // 取得目前的試算表檔案
              var ss=SpreadsheetApp.getActiveSpreadsheet();
                // 抓試算表名稱
                // 請輸入您的試算表名稱在這裡
              var ws=ss.getSheetByName("會員資料");
                //插入資料
              ws.appendRow([currentDate, rowData.name, rowData.phone, rowData.borthday, rowData.live, rowData.area]);
            
            }
      
    