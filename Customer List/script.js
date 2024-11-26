document.addEventListener("DOMContentLoaded", () => {
  const addCustomerBtn = document.getElementById("addCustomerBtn");
  const addCustomerModal = document.getElementById("addCustomerModal");
  const closeModal = document.getElementById("closeModal");
  const customerForm = document.getElementById("customerForm");
  const customerTableBody = document.querySelector("#customerTable tbody");
  const modalTitle = document.getElementById("modalTitle");

  let editingCustomerIndex = null;

  // Show modal
  addCustomerBtn.addEventListener("click", () => {
    modalTitle.textContent = "Add Customer";
    customerForm.reset();
    editingCustomerIndex = null; // Reset editing state
    addCustomerModal.style.display = "block";
  });

  // Hide modal
  closeModal.addEventListener("click", () => {
    addCustomerModal.style.display = "none";
  });

  // Add or Edit customer
  customerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const accountNumber = document.getElementById("accountNumber").value;
    const address = document.getElementById("address").value;

    const customer = { name, email, accountNumber, address };

    if (editingCustomerIndex === null) {
      // Add new customer
      addCustomerRow(customer);
    } else {
      // Edit existing customer
      updateCustomerRow(editingCustomerIndex, customer);
    }

    // Reset form and close modal
    customerForm.reset();
    addCustomerModal.style.display = "none";
  });

  // Add new customer row
  function addCustomerRow(customer) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${customer.name}</td>
      <td>${customer.email}</td>
      <td>${customer.accountNumber}</td>
      <td>${customer.address}</td>
      <td>
        <button class="edit-btn">Edit</button>
      </td>
    `;
    customerTableBody.appendChild(row);

    const editBtn = row.querySelector(".edit-btn");
    editBtn.addEventListener("click", () => {
      openEditModal(row);
    });
  }

  // Update customer row
  function updateCustomerRow(index, customer) {
    const row = customerTableBody.children[index];
    row.cells[0].textContent = customer.name;
    row.cells[1].textContent = customer.email;
    row.cells[2].textContent = customer.accountNumber;
    row.cells[3].textContent = customer.address;
  }

  // Open edit modal with prefilled values
  function openEditModal(row) {
    editingCustomerIndex = Array.from(customerTableBody.children).indexOf(row);
    modalTitle.textContent = "Edit Customer";

    document.getElementById("name").value = row.cells[0].textContent;
    document.getElementById("email").value = row.cells[1].textContent;
    document.getElementById("accountNumber").value = row.cells[2].textContent;
    document.getElementById("address").value = row.cells[3].textContent;

    addCustomerModal.style.display = "block";
  }
});
