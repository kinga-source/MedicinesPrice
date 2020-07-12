const medicinePrice = document.querySelector('#medicinePrice');
const packages = document.querySelector('#packages');
const refound = document.querySelector('#refound');
const error = document.querySelector('.error');
const countBtn = document.querySelector('.count');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');


const showBill = () => {
    if (medicinePrice.value == '' || packages.value == '' || refound.value == 0) {
        error.textContent = 'Complete all fields!';
        costInfo.style.display = 'none'; 
    } else {
        error.textContent = '';
        countBill();
    }
};

const countBill = () => {
    const newPrice = parseFloat(medicinePrice.value);
    const newPackages = parseInt(packages.value);
    const newRefound = parseFloat(refound.value);
    const sum = (newPrice + (newPrice * newRefound)) * newPackages;

    costInfo.style.display = 'block';
    cost.textContent = sum.toFixed(2);
};


countBtn.addEventListener('click', showBill);