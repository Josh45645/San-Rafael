
   // Function to start the number counter animation when element is in view
   function startCounterAnimationWhenInView(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const valueDisplay = entry.target;
        startCounterAnimation(valueDisplay);
        // Unobserve the target once animation starts to avoid unnecessary re-runs
        observer.unobserve(valueDisplay);
      }
    });
  }
  
  // Your original interval value
  let interval = 4000;
  
  // Target all elements with class "num" and observe them for intersection
  let valueDisplays = document.querySelectorAll(".num");
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // When half of the target is visible
  };
  let observer = new IntersectionObserver(startCounterAnimationWhenInView, options);
  valueDisplays.forEach(valueDisplay => {
    observer.observe(valueDisplay);
  });
  
  // Function to start the number counter animation
  function startCounterAnimation(valueDisplay) {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
      startValue += 10;
      valueDisplay.textContent = startValue;
      if (startValue >= endValue) {
        clearInterval(counter);
      }
    }, duration);
  }
  
  
  // Define events
  var events = [
      {
          name: "Event 1",
          endDate: "2024-07-12"
      },
      {
          name: "Event 2",
          endDate: "2024-04-01"
      },
      {
          name: "Event 3",
          endDate: "2024-03-28"
      },
      {
          name: "Event 4",
          endDate: "2024-03-28"
      }
      // Add more event objects as needed
  ];
  
  // Function to check if an event has ended
  function checkEventStatus(event, className, messageID, ogID) {
      // Get the current date
      var currentDate = new Date();
  
      // Convert event end date to Date object
      var eventEndDate = new Date(event.endDate);
  
      // Get elements with the specified class
      var elements = document.getElementsByClassName(className);
  
      // Loop through each element
      for (var i = 0; i < elements.length; i++) {
          var element = elements[i];
  
          // Retrieve the computed style of the element
          var computedStyle = window.getComputedStyle(element);
          // Get the original textDecoration property value
          var originalTextDecoration = computedStyle.textDecoration;
  
          // Compare current date with event end date
          if (currentDate > eventEndDate) {
              // Event has ended
              element.style.textDecoration = "line-through";
              // Show the message element
              document.getElementById(messageID).style.display = "block";
              document.getElementById(ogID).style.display = "none";
          } else {
              // Event is still ongoing
              element.style.textDecoration = originalTextDecoration;
              // Hide the message element
              document.getElementById(messageID).style.display = "none";
              document.getElementById(ogID).style.display = "block";
          }
      }
  }
  
  // Loop through the events array and check the status of each event for each class
  for (var i = 0; i < events.length; i++) {
      var event = events[i];
      var className = "trans" + (i + 1); // Generate class name (trans1, trans2, etc.)
      var messageID = "message" + (i + 1);
      var ogID = "og" + (i + 1); // Generate message element ID (message1, message2, etc.)
      checkEventStatus(event, className, messageID, ogID);
  }
  document.addEventListener('DOMContentLoaded', function () {
      const allCards = document.querySelectorAll('.brgycard, .brgycardS, .brgycardS2');
      let currentClickedCard = null;
  
      // Check if the device supports touch events
      const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  
      allCards.forEach(card => {
          card.addEventListener('click', function () {
              // If it's a mobile device, handle click behavior differently
              if (isMobile) {
                  if (this === currentClickedCard) {
                      this.classList.remove('clicked');
                      currentClickedCard = null;
                  } else {
                      if (currentClickedCard) {
                          currentClickedCard.classList.remove('clicked');
                      }
                      this.classList.add('clicked');
                      currentClickedCard = this;
                  }
              } else {
                  // For non-mobile devices, keep the original click behavior
                  this.classList.toggle('clicked');
              }
          });
  
          // Add hover effect if needed
          card.addEventListener('mouseenter', function () {
              this.classList.add('hovered');
          });
  
          card.addEventListener('mouseleave', function () {
              this.classList.remove('hovered');
          });
      });
  });
  
  var links = document.getElementsByClassName("MYLINK");
  
  // Loop through each link and attach a click event listener
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default behavior of the link
      alert("Not Available");
      alert("Wala Talaga yang Facebook");
    });
  }
  
  var links = document.getElementsByClassName("JOHN");
  
  // Loop through each link and attach a click event listener
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default behavior of the link
      alert("Not Available");
      alert("Wala Talaga yang Facebook");
    });
  }