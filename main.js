$(document).ready(() => {
  let isOpen = false;
  const drawerHenlder = () => {
    if (!isOpen) {
      $(".drawer").css({ width: "250px" });
      $(".drawer_background").fadeIn(100);
      isOpen = !isOpen;
    } else {
      $(".drawer").css({ width: "0px" });
      $(".drawer_background").fadeOut(100);
      isOpen = !isOpen;
    }
  };

  $(".menu_bar").click(drawerHenlder);
  $(".drawer_background").click(drawerHenlder);
});

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["SAMSUNG", "VIVO", "OPPO", "REDMI", "LG", "CROMA"],
    datasets: [
      {
        label: "Mobail  Profit",
        data: [19, 12, 10, 8, 6, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// section1

$(".mode").click(function () {
  $(".bg_primary").toggleClass("dark2");
});
$(".mode").click(function () {
  $(".dady").toggleClass("dark1");
});
$(".mode").click(function () {
  $(".drawer").toggleClass("dark3");
});

// set colors
var colors = {
  base: "#0131B4", // blue
  negative: "#41917F", // red
  positive: "#D93831" // blue
};

// set values
var currentData = [61, 78, 88, 16, 36, 78, 86, 16, 61, 78];
var previousData = [91, 38, 46, 27, 116, 38, 44, 27, 91, 38];

// change color for values
currentData.forEach(function (value, i) {
  currentData[i] = {
    y: value,
    color: previousData[i] < value ? colors.negative : colors.positive
  };
});

// Init chart
Highcharts.chart("container", {
  chart: {
    type: "column"
  },
  title: {
    text: "Stacked column chart"
  },
  xAxis: {
    categories: [
      "Jan.",
      "Feb.",
      "Mar.",
      "Apr.",
      "May",
      "Jun.",
      "Jul.",
      "Aug.",
      "Sept.",
      "Oct.",
      "Nov.",
      "Dec."
    ]
  },
  yAxis: {
    min: 0,
    title: {
      text: "Total entries"
    }
  },
  tooltip: {
    pointFormat:
      "<span>{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>",
    shared: true
  },
  plotOptions: {
    column: {
      stacking: "normal",
      pointWidth: 10,
      borderWidth: 0
    },
  },
  series: [
    {
      name: "Year",
      data: currentData,
      color: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, colors.negative], // start
          [0.5, colors.negative], // middle top
          [0.5, colors.positive], // middle bottom
          [1, colors.positive] // end
        ]
      },
      borderRadiusTopLeft: 4,
      borderRadiusTopRight: 4
    },
    {
      name: "Year N-1",
      data: previousData,
      color: colors.base
    }
  ]
});

$('.filter').change(function(){

  filter_function();
  
  //calling filter function each select box value change
  
});

$('table tbody tr').show(); //intially all rows will be shown

function filter_function(){
  $('table tbody tr').hide(); //hide all rows
  
  var companyFlag = 0;
  var companyValue = $('#filter-company').val();
  var contactFlag = 0;
  var contactValue = $('#filter-contact').val();
   var rangeFlag = 0;
  var rangeValue = $('#filter-range').val();
   var rangeminValue = $('#filter-range').find(':selected').attr('data-min');
   var rangemaxValue = $('#filter-range').find(':selected').attr('data-max');
  
  //setting intial values and flags needed
  
 //traversing each row one by one
  $('table tr').each(function() {  
  
    if(companyValue == 0){   //if no value then display row
    companyFlag = 1;
    }
    else if(companyValue == $(this).find('td.company').data('company')){ 
      companyFlag = 1;       //if value is same display row
    }
    else{
      companyFlag = 0;
    }
    
    
     if(contactValue == 0){
    contactFlag = 1;
    }
    else if(contactValue == $(this).find('td.contact').data('contact')){
      contactFlag = 1;
    }
    else{
      contactFlag = 0;
    }
    
    
    
     if(rangeValue == 0){
    rangeFlag = 1;
    }
  //condition to display rows for a range
    else if((rangeminValue <= $(this).find('td.range').data('min') && rangemaxValue >  $(this).find('td.range').data('min')) ||  (
      rangeminValue < $(this).find('td.range').data('max') &&
      rangemaxValue >= $(this).find('td.range').data('max'))){
      rangeFlag = 1;
    }
    else{
      rangeFlag = 0;
    }
     
      console.log(rangeminValue +' '+rangemaxValue);
      console.log($(this).find('td.range').data('min') +' '+$(this).find('td.range').data('max'));
    
    
   if(companyFlag && contactFlag && rangeFlag){
     $(this).show();  //displaying row which satisfies all conditions
   }

});


  
  
}