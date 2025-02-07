let output = document.getElementById('output');
      function fetchData() {
         fetch('https://api.coinpaprika.com/v1/coins/btc-bitcoin')
         .then(assets => assets.json())
         .then(data => {
            output.innerHTML += "id = " + data.id + "<br/>";
            output.innerHTML += "brand = " + data.rank + "<br/>";
            output.innerHTML += "category = " + data.name + "<br/>";
            output.innerHTML += "price = " + data.symbol + "<br/>";
            output.innerHTML += "rating = " + data.type + "<br/>";
            output.innerHTML += "stock = " + data.logo + "<br/>";
         })
      }