const state = {
  userList: []
};

const UserList = (list, component) => {
    list.forEach((item) => {
        const newLi = document.createElement('li');
        newLi.innerHTML = `${item.name} - ${item.balance}`;
        component.appendChild(newLi);
    })
}

const setState = (stateName, newValue) => {
  state[stateName] = newValue;
  renderUserList();
  renderOptions();
  renderHistory()
};

function renderHistory() {
  const components = [document.getElementById('history')];
  components.forEach((component) => {
    component.innerHTML = '';
    state.userList.forEach((item) => {
      const newLi = document.createElement('li');
      newLi.innerHTML = `${item.name} has been added to account list with the balance of ${item.balance}$`;
      component.appendChild(newLi);
    });
  });
}



function renderOptions() {
    const components = [document.getElementById('options'), document.getElementById('options2')];

    components.forEach((component) => {
        component.innerHTML = '';
        state.userList.forEach((item) => {
        const newOption = document.createElement('option');
        newOption.innerHTML = item.name;
        component.appendChild(newOption);
        });
    });
}

function renderUserList() {
  const components = [document.getElementById('user-list')];

  components.forEach((component) => {
    component.innerHTML = "";
    // console.log(component.id);
    if (component.id === "user-list") {
      UserList(state.userList, component);
    }
  });
}

const addCustomer = () => {
  const customerName = document.getElementById("customerName").value;
  const customerBalance = document.getElementById("customerBalance").value;

    if (customerName === "" || customerBalance === "") {
      alert("Please fill all the fields");
    } else {
  setState("userList", [...state.userList, {name: customerName, balance: customerBalance, id: ID()}]);
}};


const ID = () => {
  return Math.floor(Math.random()* 100000);
}



// *** Send Money ***
const sendMoney = () => {
    //  ? Burada options'ta seçtiğimiz kişinin value'sunu nasıl alacağız ? 
}