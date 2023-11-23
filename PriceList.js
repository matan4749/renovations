function calculatePrice() {
    const quantityBedroomRemodel = parseInt(document.getElementById('quantityBedroomRemodel').value, 10);
    const quantityKitchenBuild = parseInt(document.getElementById('quantityKitchenBuild').value, 10);
    const quantityBathroomRemodel = parseInt(document.getElementById('quantityBathroomRemodel').value, 10);
    const quantityWoodFloor = parseInt(document.getElementById('quantityWoodFloor').value, 10);
    const quantityPaintWalls = parseInt(document.getElementById('quantityPaintWalls').value, 10);
  
    const priceBedroomRemodel = 5000;
    const priceKitchenBuild = 8000;
    const priceBathroomRemodel = 3500;
    const priceWoodFloor = 6000;
    const pricePaintWalls = 2000;
  
    const subtotalBedroomRemodel = quantityBedroomRemodel * priceBedroomRemodel;
    const subtotalKitchenBuild = quantityKitchenBuild * priceKitchenBuild;
    const subtotalBathroomRemodel = quantityBathroomRemodel * priceBathroomRemodel;
    const subtotalWoodFloor = quantityWoodFloor * priceWoodFloor;
    const subtotalPaintWalls = quantityPaintWalls * pricePaintWalls;
  
    document.getElementById('subtotalBedroomRemodel').innerText = subtotalBedroomRemodel;
    document.getElementById('subtotalKitchenBuild').innerText = subtotalKitchenBuild;
    document.getElementById('subtotalBathroomRemodel').innerText = subtotalBathroomRemodel;
    document.getElementById('subtotalWoodFloor').innerText = subtotalWoodFloor;
    document.getElementById('subtotalPaintWalls').innerText = subtotalPaintWalls;
  
    const totalPrice = subtotalBedroomRemodel + subtotalKitchenBuild + subtotalBathroomRemodel + subtotalWoodFloor + subtotalPaintWalls;
    document.getElementById('totalPrice').innerText = `סכום כולל: ${totalPrice} ₪`;
  }
  