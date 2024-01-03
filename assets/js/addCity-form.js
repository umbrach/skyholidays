// For Add or Remove Flight Multi City Option Start
$(document).ready(function () {
  $("#addMulticityRow").on("click", function () {
    let a = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(0, 5);

    if (document.querySelectorAll(".multi_city_form").length === 3) {
      alert("Max City Limit Reached!!");
      return;
    }
    $(".multi_city_form_wrapper")
      .append(`<div class="row g-3 mt-1 multi_city_form">
                      <div class="col-md-6">
                        <div class="input-group">
                          <span class="input-group-text" id="basic-addon1"
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              width="18"
                              height="18"
                              fill="gray"
                              id="aircraft"
                            >
                              <path
                                d="M19.87 6.453c.119.257.127 1.29-4.884 3.642l-4.913 2.306c-1.71.803-4.191 1.859-5.285 2.151-.766.204-1.497-.316-1.497-.316S1.085 12.261.499 11.817c-.585-.444-.535-.67.215-.91.467-.149 3.13.493 4.265.78A91.697 91.697 0 0 1 8.12 9.889c-1.396-1.033-4.008-2.962-4.841-3.55-.799-.565.01-.768.01-.768.368-.099 1.162-.228 1.562-.144 2.721.569 7.263 2.071 7.611 2.186a90.641 90.641 0 0 1 2.922-1.465c2.075-.974 4.327-.037 4.486.305z"
                              ></path></svg
                          ></span>
                          <input
                            type="text"
                            class="form-control"
                            id="inputDepatrure"
                            placeholder="Departure Airport"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="input-group">
                          <span class="input-group-text" id="basic-addon1"
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              width="18"
                              height="18"
                              id="aircraft"
                              fill="gray"
                            >
                              <path
                                d="M18.752 16.038c-.097.266-.822 1.002-6.029-.878l-5.105-1.843C5.841 12.676 3.34 11.668 2.36 11.1c-.686-.397-.836-1.282-.836-1.282s-.163-2.956-.263-3.684c-.1-.728.095-.853.796-.492.436.225 1.865 2.562 2.464 3.567 1.512.381 2.862.761 3.493.949-.257-1.717-.74-4.928-.913-5.933-.166-.963.55-.535.55-.535.331.19.983.661 1.206 1.002 1.522 2.326 3.672 6.6 3.836 6.928.896.28 2.277.733 3.102 1.03 2.156.779 3.087 3.034 2.957 3.388z"
                              ></path></svg
                          ></span>
                          <input
                            type="text"
                            class="form-control"
                            id="inputArrival"
                            placeholder="Arrival Airport"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="input-group">
                          <span class="input-group-text" id="basic-addon1"
                            ><i class="bi bi-calendar3" style="color: gray;"></i></span>
                          <input
                            class="form-control"
                            type="text"
                            id="datepicker1"
                            placeholder="Departure date"
                            autocomplete="off"
                          />
                        </div>
                      </div>
            <div class="multi_form_remove col-md-6">
              <button type="button" id="remove_multi_city" class="btn-remove w-100 h-100">- Remove City</button>
            </div>
        </div>
    </div>`);
  });
  // Remove Button Click
  $(document).on("click", function (e) {
    if (e.target.id === "remove_multi_city") {
      $(e.target).parent().closest(".multi_city_form").remove();
    }
  });
});
