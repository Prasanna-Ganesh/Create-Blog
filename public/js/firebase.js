const firebaseConfig = {

   // Enter your firebase credentials

    // apiKey: "AIzaSyD8j9SF2r8xkCaBk4s86OfnYCy-lWyw62c",
    // authDomain: "prasanna-blog-2f54c.firebaseapp.com",
    // projectId: "prasanna-blog-2f54c",
    // storageBucket: "prasanna-blog-2f54c.appspot.com",
    // messagingSenderId: "824883392444",
    // appId: "1:824883392444:web:e09bda0a03eb082b2485b9",
    // measurementId: "G-3VT998JZ0L"
  };

  const app = initializeApp(firebaseConfig);

  let db = firebase.firestore(app);
