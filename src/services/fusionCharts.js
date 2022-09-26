
FusionCharts.ready(function() {
   var d = new Date();
   var monthArr = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
   ];

   var outDate =
      monthArr[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

   new FusionCharts({
      type: "realtimeline",

      renderAt: "chart-container",
      width: "600",
      height: "400",
      dataFormat: "json",
      dataSource: {
         chart: {
            caption: "Bitcoin Price Ticker",
            subCaption: outDate,
            numberPrefix: "$",
            numdisplaysets: "10",
            labeldisplay: "rotate",
            showRealTimeValue: "0",
            theme: "fusion",
            plotToolText: "$label<br>Price: <b>$dataValue</b>",
            setAdaptiveYMin: "1"
         },
         categories: [
            {
               category: [
                  {
                     label:
                        d.getHours() +
                        ":" +
                        d.getMinutes() +
                        ":" +
                        (d.getSeconds() - 2)
                  },
                  {
                     label:
                        d.getHours() +
                        ":" +
                        d.getMinutes() +
                        ":" +
                        (d.getSeconds() - 1)
                  },
                  {
                     label:
                        d.getHours() +
                        ":" +
                        d.getMinutes() +
                        ":" +
                        d.getSeconds()
                  }
               ]
            }
         ],
         dataset: [
            {
               data: [
                  {
                     value: "7358"
                  },
                  {
                     value: "7361"
                  },
                  {
                     value: "7362"
                  }
               ]
            }
         ]
      },
      events: {
         initialized: function(evt, arg) {
            // Get reference to the chart
            var chartRef = evt.sender;

            function updateData() {
               var t = new Date(),
                  date =
                     t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds(),
                  val = Math.floor(Math.random() * (7800 - 7200 + 1)) + 7200,
                  strData = "&label=" + date + "&value=" + val;

               // Feed it to chart.
               chartRef.feedData(strData);
            }

            chartRef.intervalUpdateId = setInterval(updateData, 1000);
         },

         disposed: function(evt, args) {
            clearInterval(evt.sender.intervalUpdateId);
         }
      }
   }).render();
});