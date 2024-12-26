document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".mobile .menu");
    const mobile = document.querySelector(".mobile");  // Targeting the .mobile container
    const body = document.body;

    // Create the vertical menu dynamically
    const verticalMenu = document.createElement("div");
    verticalMenu.classList.add("vertical-navigation-bar");
    verticalMenu.innerHTML = `
      <div class="nav-item" onclick="window.location.href='landing.html'">About</div>
      <div class="nav-item" onclick="window.location.href='price.html'">Pricing</div>
      <div class="nav-item" onclick="window.location.href='contact.html'">Contact</div>
      <div class="nav-item" onclick="window.location.href='signin.html'">Sign In</div>
      <div class="nav-item" onclick="window.location.href='tryfree.html'">Try for Free</div>
    `;
    verticalMenu.style.display = "none"; // Initially hidden
    body.appendChild(verticalMenu);

    // Add styles dynamically for the vertical menu
    Object.assign(verticalMenu.style, {
      flexDirection: "column",
      alignItems: "center",
      gap: "15px",
      position: "absolute",
      top: "70px",
      right: "20px",
      backgroundColor: "#ffffff",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      zIndex: "1000",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    });

    // Add styles for individual nav items
    const navItems = verticalMenu.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
      Object.assign(item.style, {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "200px",
        height: "50px",
        backgroundColor: "#f1f1f1",
        color: "#000",
        fontFamily: "Poppins-Regular, Helvetica",
        fontSize: "16px",
        textAlign: "center",
        borderRadius: "8px",
        border: "1px solid #ccc",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      });

      // Add hover effect
      item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "#ddd";
      });
      item.addEventListener("mouseout", () => {
        item.style.backgroundColor = "#f1f1f1";
      });
    });

    // Toggle the vertical menu visibility on clicking the menu icon or .mobile div
    const toggleMenu = () => {
      if (window.innerWidth <= 1024) {
        if (verticalMenu.style.display === "none") {
          verticalMenu.style.display = "flex"; // Show the menu
        } else {
          verticalMenu.style.display = "none"; // Hide the menu
        }
      }
    };

    // Add event listeners for both .mobile div and menu icon (image)
    menuIcon.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent the click event from propagating to the document
      toggleMenu(); // Toggle the menu
    });

    mobile.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent the click event from propagating to the document
      toggleMenu(); // Toggle the menu
    });

    // Close the vertical menu if clicking outside of it
    document.addEventListener("click", (e) => {
      if (!verticalMenu.contains(e.target) && e.target !== menuIcon && e.target !== mobile) {
        verticalMenu.style.display = "none"; // Hide the menu if clicked outside
      }
    });

    // Handle touch events for mobile devices
    menuIcon.addEventListener("touchstart", (e) => {
      e.stopPropagation();
      toggleMenu(); // Toggle the menu
    });

    mobile.addEventListener("touchstart", (e) => {
      e.stopPropagation();
      toggleMenu(); // Toggle the menu
    });

    // Handle window resize events
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        verticalMenu.style.display = "none"; // Hide menu on larger screens
      }
    });

    // Hide the menu when scrolling
    window.addEventListener("scroll", () => {
      verticalMenu.style.display = "none";
    });

});
