$(function(){

        //extra method to center text
        jsPDF.API.centerText = function (txt, size){
            var fontSize = this.internal.getFontSize();
            var pageWidth = this.internal.pageSize.width * size;
            var txtWidth = this.getStringUnitWidth(txt)*fontSize/this.internal.scaleFactor;
            // Calculate text's x coordinate
            var x = ( pageWidth - txtWidth ) / 2;
            var info = {
              text: txt,
              x: x
            }
            return info
        }
	
  
var pdf = new jsPDF('p', 'pt', 'a4');
var options = {
         background: '#fff',
         logging: true,
       
    };
var array = [];

$('button').click(function(){

  //grab name and title input values
  var name = $('#name').val();
  var title = $('#title').val();

  //iterate through inputs to get values and push to array
  $('.smallInput').each(function(index, val){
    array.push({
      pos: $(this).attr('id'),
      val: $(this).val(), 
      src: $('.icons').eq(index).attr('src'),
      text: $('.texts').eq(index).attr('src')
    });
  });
  //update img and text position with new values
  $('.icons').each(function(i, val){
    $('.icons').eq(parseInt(array[i].val) -1).attr('src', array[i].src);
    $('.texts').eq(parseInt(array[i].val) -1).attr('src', array[i].text);

  });
      //add screenshot for page 1
     pdf.addHTML($('#page1'),0,140, options, function(){
      //name on cover page
      pdf.setFontType("normal");
      pdf.setTextColor(119, 67, 149);
      pdf.setFontSize(30);
      var info = pdf.centerText(name, 1);
      pdf.text(info.x, 500, info.text);

      //title on cover page
      pdf.setTextColor(42, 45, 48);
      pdf.setFontSize(25);
      var info2 = pdf.centerText(title, 1);
      pdf.text(info2.x, 540, info2.text);

      //create second page
       pdf.addPage();
        
        //add screenshot for page 2
        pdf.addHTML($('#page2'), options, function (){
          //add name and title on second page
          pdf.setFontType("normal");
          pdf.setTextColor(119, 67, 149);
          pdf.setFontSize(20);
          var info3 = pdf.centerText(name +', ' + title, .75);
          pdf.text(info3.x, 400, info3.text);
          
          //create third page
          pdf.addPage();
          
          //add screenshot for page 3
          pdf.addHTML($('#page3'), options, function (){
           
                pdf.save('test.pdf');
            });
    });

  });

});

});

