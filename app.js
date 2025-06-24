// Sample doctors data (replace with API/backend in real app)
const doctors = [
    { doctor_id: 1, first_name: "John", last_name: "Smith", specialization: "Cardiology" },
    { doctor_id: 2, first_name: "Anna", last_name: "Lee", specialization: "Dermatology" },
    { doctor_id: 3, first_name: "Mike", last_name: "Brown", specialization: "Pediatrics" },
  ];
  
  // Populate doctors list on doctors.html
  function populateDoctorsList() {
    const doctorList = document.getElementById('doctorList');
    if (!doctorList) return;
  
    doctors.forEach(doc => {
      const li = document.createElement('li');
      li.textContent = `${doc.first_name} ${doc.last_name} - ${doc.specialization}`;
      doctorList.appendChild(li);
    });
  }
  
  // Populate doctors dropdown on booking.html
  function populateDoctorDropdown() {
    const doctorSelect = document.getElementById('doctor');
    if (!doctorSelect) return;
  
    doctors.forEach(doc => {
      const option = document.createElement('option');
      option.value = doc.doctor_id;
      option.textContent = `${doc.first_name} ${doc.last_name} - ${doc.specialization}`;
      doctorSelect.appendChild(option);
    });
  }
  
  // Form submission handler
  function handleBookingForm() {
    const form = document.getElementById('bookingForm');
    if (!form) return;
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const fname = form.fname.value.trim();
      const lname = form.lname.value.trim();
      const dob = form.dob.value;
      const phone = form.phone.value.trim();
      const email = form.email.value.trim();
      const doctorId = form.doctor.value;
      const appointmentDate = form.appointmentDate.value;
  
      // Validate date is future date
      if (new Date(appointmentDate) <= new Date()) {
        alert("Please select a future date and time for appointment.");
        return;
      }
  
      if (!fname || !lname || !dob || !phone || !doctorId || !appointmentDate) {
        alert("Please fill in all required fields.");
        return;
      }
  
      // Show confirmation message
      const doctor = doctors.find(d => d.doctor_id == doctorId);
      const confirmationDiv = document.getElementById('confirmation');
      confirmationDiv.innerHTML = `
        <h3>Appointment Confirmed!</h3>
        <p>Thank you, ${fname} ${lname}. Your appointment with Dr. ${doctor.first_name} ${doctor.last_name} (${doctor.specialization}) is scheduled for ${new Date(appointmentDate).toLocaleString()}.</p>
      `;
  
      form.reset();
    });
  }
  
  // Run scripts on page load
  document.addEventListener('DOMContentLoaded', () => {
    populateDoctorsList();
    populateDoctorDropdown();
    handleBookingForm();
  });
  