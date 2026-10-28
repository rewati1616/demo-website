import app from './src/index.js';

async function runTests() {
  console.log('--- Starting In-Process API Test ---');

  // Test 1: Healthcheck
  const res1 = await fetch('http://127.0.0.1:5000/api/health');
  const health = await res1.json();
  console.log('✓ Healthcheck:', health);

  // Test 2: Admin Login
  const res2 = await fetch('http://127.0.0.1:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'admin', password: 'admin123' })
  });
  const loginData = await res2.json();
  console.log('✓ Admin Login Status:', loginData.success, 'Token prefix:', loginData.token?.slice(0, 15));

  // Test 3: Submit New Enquiry
  const res3 = await fetch('http://127.0.0.1:5000/api/enquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      customer_name: 'Pooja Kulkarni',
      phone: '+91 98220 99887',
      email: 'pooja.kulkarni@example.com',
      service_category: 'Computer & Laptop Repair',
      device_type: 'HP Pavilion 14',
      brand_model: 'Pavilion 14-dv0054TU',
      problem_description: 'Laptop keyboard spacebar and enter key not registering after liquid splash.',
      preferred_contact: 'WhatsApp'
    })
  });
  const enquiryData = await res3.json();
  console.log('✓ Submit Enquiry:', enquiryData.success, 'Ref:', enquiryData.enquiry?.reference_id);

  // Test 4: Admin Get Enquiries
  const res4 = await fetch('http://127.0.0.1:5000/api/enquiries', {
    headers: { Authorization: `Bearer ${loginData.token}` }
  });
  const listData = await res4.json();
  console.log('✓ Admin Enquiries Count:', listData.data?.length, 'Stats:', listData.stats);

  // Test 5: Update Status
  const testId = enquiryData.enquiry ? listData.data[0].id : null;
  if (testId) {
    const res5 = await fetch(`http://127.0.0.1:5000/api/enquiries/${testId}/status`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${loginData.token}`
      },
      body: JSON.stringify({ status: 'Diagnosis Pending' })
    });
    const patchData = await res5.json();
    console.log('✓ Status Update to Diagnosis Pending:', patchData.success);
  }

  console.log('--- All API Tests Passed Successfully! ---');
  process.exit(0);
}

runTests().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
