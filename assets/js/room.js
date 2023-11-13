let roomCount = 1;

function updateGuestCounts() {
  let sumAdults = 0;
  let sumChildren = 0;

  // Calculate the total count of adults and children across all rooms
  for (let i = 0; i < roomCount; i++) {
    sumAdults += parseInt(
      document.getElementById(`adultCount-${i}`).textContent,
      10
    );
    sumChildren += parseInt(
      document.getElementById(`childCount-${i}`).textContent,
      10
    );
  }

  // Update the total counts in the "Guests" button
  document.getElementById("totalAdults").textContent = sumAdults;
  document.getElementById("totalChildren").textContent = sumChildren;
}

function increaseGuest(type, roomIndex, event) {
  const countSpan = document.getElementById(`${type}Count-${roomIndex}`);
  countSpan.textContent = parseInt(countSpan.textContent, 10) + 1;

  if (type === "child") {
    // child age field add
    createChildAgeField(roomIndex, countSpan.textContent);
  }

  updateGuestCounts();
  event.stopPropagation();
}

function decreaseGuest(type, roomIndex, event) {
  const countSpan = document.getElementById(`${type}Count-${roomIndex}`);
  let count = parseInt(countSpan.textContent, 10);

  if (count > 0) {
    countSpan.textContent = count - 1;
    updateGuestCounts();

    if (type === "child") {
      // child age field delete
      const childAgesContainer = document.getElementById(
        `childAges-${roomIndex}`
      );
      const lastChildAgeField = childAgesContainer.lastElementChild;
      if (lastChildAgeField) {
        childAgesContainer.removeChild(lastChildAgeField);
      }
    }
  }

  event.stopPropagation();
}

function addRoom(event) {
  event.stopPropagation(); // Prevents the dropdown from closing

  const dropdownMenu = document.querySelector(".dropdown-menu.rooms");

  const roomField = document.createElement("li");
  roomField.id = `room-${roomCount}`;
  roomField.innerHTML = `
        <div class="room-top p-1">
          <p >Room ${roomCount + 1}</p>
          <button type="button" class="btn-remove py-1" onclick="removeRoom(event, this);">- Remove Room</button>
        </div>
          <ul class="" aria-labelledby="guestDropdown">
            <li class="p-1">
              <div class="d-flex gap-2 justify-content-between">
                <span class="adult">Adults:</span>
                <div class="btn-group counter-add-item" role="group">
                  <a type="button" class="btn decrease-btn" onclick="decreaseGuest('adult',  ${roomCount}, event); event.stopPropagation();">-</a>
                    <span class="span-count" id="adultCount-${roomCount}">0</span>
                  <a type="button" class="btn increase-btn" onclick="increaseGuest('adult',  ${roomCount}, event); event.stopPropagation();">+</a>
                </div>
              </div>
            </li>
            <li class="p-1">
              <div class="d-flex gap-2 justify-content-between">
                <span class="child">Childs:</span>
                <div class="btn-group counter-add-item" role="group">
                  <a type="button" class="btn decrease-btn" onclick="decreaseGuest('child',  ${roomCount}, event); event.stopPropagation();">-</a>
                    <span class="span-count" id="childCount-${roomCount}">0</span>
                  <a type="button" class="btn increase-btn" onclick="increaseGuest('child',  ${roomCount}, event); event.stopPropagation();">+</a>
                </div>
              </div>
              <div id="childAges-${roomCount}"></div>
            </li>
          </ul>
      `;
  dropdownMenu.insertBefore(roomField, dropdownMenu.lastElementChild);

  roomCount++;
  updateGuestCounts(); // Update the totals after adding the room
}

function removeRoom(event, roomField) {
  event.stopPropagation(); // Prevents the dropdown from closing
  const dropdownMenu = document.querySelector(".dropdown-menu.rooms");
  const roomIndex = roomField.parentElement.parentElement.id.split("-")[1];
  dropdownMenu.removeChild(roomField.parentElement.parentElement);
  roomCount--;
  updateGuestCounts(); // Update the totals after removing the room
}

function createChildAgeField(roomIndex, childCount) {
  const childAgesContainer = document.getElementById(`childAges-${roomIndex}`);
  const childAgeField = document.createElement("div");
  childAgeField.innerHTML = `
        <div class="my-2 d-flex justify-content-between align-items-center"
        <label for="childAge-${roomIndex}-${childCount}" class="ms-2 mt-2 mb-0 p-0">Child ${childCount} Age:</label>
        <input type="number" class="age" id="childAge-${roomIndex}-${childCount}" min="0" max="17" onclick="event.stopPropagation();">
      `;
  childAgesContainer.appendChild(childAgeField);
}
