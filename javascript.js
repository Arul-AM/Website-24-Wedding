<script type="module">
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
    import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAw6moLSahJOayXFDWdA8SdcPF2dz8lXFc",
        authDomain: "reservation-3253e.firebaseapp.com",
        projectId: "reservation-3253e",
        storageBucket: "reservation-3253e.appspot.com",
        messagingSenderId: "516838643780",
        appId: "1:516838643780:web:b3793c0fddb28e0c378411",
        measurementId: "G-7X091H8BVL"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Handle form submission
    document.getElementById('eventForm').addEventListener('submit', async function(e) {
        e.preventDefault();

        const eventType = document.getElementById('event').value;
        const city = document.getElementById('city').value;

        try {
            const docRef = await addDoc(collection(db, "events"), {
                eventType: eventType,
                city: city
            });
            console.log("Document written with ID: ", docRef.id);
            alert("Event search data successfully submitted!");
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Error submitting event search data");
        }
    });

    // Function to open new tab
    function openNewTab(url) {
        window.open(url, '_blank');
    }

    
</script>


