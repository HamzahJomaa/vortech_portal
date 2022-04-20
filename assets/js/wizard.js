$(document).ready(() => {
    var multipleCancelButton = new Choices($("#choices-multiple-remove-button")[0], {
        removeItemButton: true,
        maxItemCount:5,
        searchResultLimit:5,
        renderChoiceLimit:5
    });
    const RemoveItem = () => {
        let section = $("#option-wrapper div").attr("id")
        let lastItem = $(".choices__list.choices__list--multiple div")[$(".choices__list.choices__list--multiple div").length - 1]
        lastItem.remove()
        percent -= add
        $("#progressBar").css("width", `${percent}%`)
        $(".progress-main .car").css("left", `${percent - 4}%`)



        if (section === "modelSection") {
            $(".question h2").empty().append(`What is your<span class="text-primary">car's brand?</span>`)
            renderElement(cars, "carSection")
        } else if (section === "specSection") {
            $(".question h2").empty().append(`What is your <span class="text-primary">${result.car.title} model?</span>`)
            renderElement(models, "modelSection")
        } else if (section === "yearSection") {
            $(".question h2").empty().append(`What is your <span class="text-primary">${result.car.title} specification?</span>`)
            renderElement(spec, "specSection")
        } else if (section === "citySection") {
            $(".question h2").empty().append(`What is the year of <span class="text-primary">manufacture of your Car?</span>`)
            renderElement(year, "yearSection")
        } else if (section === "priceSection") {
            $(".question h2").empty().append("What is your car's <span class='text-primary'> city of registration?</span>")
            renderElement(city, "citySection")
            $(".select-box").show()
        } else if (section === "expSection") {
            $(".select-box").hide()
            $(".question h2").empty().append("What is the<span class='text-primary'> value of your car?</span>")
            renderSlider(minPrice, maxPrice)
        } else if (section === "certSection") {
            $(".question h2").empty().append("Do you have a No Claims Certificate from <span class='text-primary'> your insurer(s)?</span>")
            renderElement(experience, "expSection")
        } else if (section === "cmpSection") {
            $(".question h2").empty().append("What is your current <span class='text-primary'> insurance company?</span>")
            renderElement(cert, "certSection")
        } else if (section === "monthSection") {
            $(".question h2").empty().append("What is your current <span class='text-primary'> insurance company?</span>")
            renderElement(cmpSection, "cmpSection", )
        } else {
            $(".options").show()
            $(".select-box").show()
            $(".question").show()
            $(".personal-form").hide()
            $(".question h2").empty().append("What is your<span class='text-primary'> policy expiry month?</span>")

            $("#option-wrapper").empty().append(`<div id='monthSection' class="row mt-2">
                                    <div class="col-12 col-lg-6 mt-2 ">
                                        <select class="form-select year" aria-label="Default select example">
                                            <option selected disabled hidden>Year</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                            <option value="2025">2025</option>
                                            <option value="2026">2026</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-lg-6 mt-2">
                                        <select disabled class="form-select month" aria-label="Default select example">
                                            <option selected disabled hidden>Month</option>
                                        </select>
                                    </div>
                                 </div>`)

            month.map(element=>{
                $("#monthSection .month").append(`<option value="${element.id}">${element.title}</option>`)
            })
        }
    }
    

    $("body").on("click","#options__close",RemoveItem)

    // Back Button Functionality
    $(".btn-back").click(RemoveItem)
    
    
    

    $('[data-toggle="datepicker"]').datepicker();

    let percent = 0, add = 6 // Responsible for ProgressBar



    $("#progressBar").css("width", `${percent}%`)
    $(".checkpoint").css("background-color", "#e9ecef")
    $(".personal-form").hide()

    renderElement(cars,"carSection") //Render First Step For Cars Type



    let result = {

    }


    // Default Select
    $("body").on("click", ".option-item", function() {
        let optionName = $(this).find("p").text() //Get The Selected Text
        let optionId = $(this).attr("id") //Get The Selected ID
        let selectedItems = $(".choices__list.choices__list--multiple div").length //Get The Total Selected Item Before
        let section = $(this).attr("section") //Get The Current Section


        percent += add


        $("#progressBar").css("width", `${percent}%`) // Update The ProgressBar
        $(".progress-main .car").css("left", `${percent - 4}%`) // Animate the Car



        // Add the Selected Item (optionName) to the Textbox

        $("#choices-multiple-remove-button").append(`<option selected value="${optionName}" >${optionName}</option>`)
        $(".choices__list.choices__list--multiple").append(`<div class="choices__item choices__item--selectable" data-item="${optionName}" data-id="${parseInt(selectedItems) + 1}" data-value="${optionName}" data-custom-properties="null" data-deletable="" aria-selected="true">${optionName}
          <button id="options__close" type="button" class="choices__button" data-button="" aria-label="Remove item: '${optionName}'">
            Remove item
          </button>
        </div>`)

        // Create an Object in order to know the selected item with its ID
        optionName = {
            id: optionId,
            title: optionName
        }



        if (section === "carSection") {
            $(".question h2").empty().append(`What is your <span class="text-primary">${optionName.title} model?</span>`)
            renderElement(models, "modelSection")
            result.car = optionName
        } else if (section === "modelSection") {
            $(".question h2").empty().append(`What is your <span class="text-primary">${result.car.title} specification?</span>`)
            renderElement(spec, "specSection")
            result.model = optionName
        } else if (section === "specSection") {
            $(".question h2").empty().append(`What is the year of<span class="text-primary"> manufacture of your Car?</span>`)
            renderElement(year, "yearSection")
            result.spec = optionName
        } else if (section === "yearSection") {
            $(".question h2").empty().append("What is your car's <span class='text-primary'> city of registration?</span>")
            renderElement(city, "citySection")
            result.year = optionName
        } else if (section === "citySection") {
            $(".select-box").hide()
            $(".question h2").empty().append("What is the<span class='text-primary'> value of your car?</span>")
            result.city = optionName
            renderSlider(minPrice, maxPrice)
        } else if (section === "expSection") {
            $(".question h2").empty().append("Do you have a No Claims Certificate from <span class='text-primary'> your insurer(s)?</span>")
            renderElement(cert, "certSection")
            result.exp = optionName
        } else if (section === "certSection") {
            $(".question h2").empty().append("What is your current <span class='text-primary'> insurance company?</span>")
            renderElement(cmpSection, "cmpSection", )
            result.cert = optionName
        } else if (section === "cmpSection") {
            $(".question h2").empty().append("What is your<span class='text-primary'> policy expiry month?</span>")

            $("#option-wrapper").empty().append(`<div id='monthSection' class="row mt-2">
                                    <div class="col-12 col-lg-6 mt-2 ">
                                        <select class="form-select year" aria-label="Default select example">
                                            <option selected disabled hidden>Year</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                            <option value="2025">2025</option>
                                            <option value="2026">2026</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-lg-6 mt-2">
                                        <select disabled class="form-select month" aria-label="Default select example">
                                            <option selected disabled hidden>Month</option>
                                        </select>
                                    </div>
                                 </div>`)


            month.map(element=>{
                $("#monthSection .month").append(`<option value="${element.id}">${element.title}</option>`)
            })
            result.cmp = optionName
        }
    })


    // Update Slider Upon Input Change
    $("body").on("keyup", "#progress-price", function() {
        $(".bar .fill").css("width", `${($(this).val() / ($("#slider").attr("max")-$("#slider").attr("min")))*100}%`);

        $("#slider").val($(this).val())
    })


    // Update Input Upon Slider Change
    $("body").on("input", "#slider", function() {
        $(".bar .fill").css("width", `${($("#slider").val() / ($("#slider").attr("max")-$("#slider").attr("min")))*100}%`);
        $("#progress-price").val($(this).val())
    })


    // Set Value of the Car and Move Forward
    $("body").on("click", "#priceSection .btn-next", function() {
        let selectedItems = $(".choices__list.choices__list--multiple div").length
        percent += add
        $("#progressBar").css("width", `${percent}%`)
        $(".progress-main .car").css("left", `${percent - 4}%`)
        $(".select-box").show()
        $("#choices-multiple-remove-button").append(`<option selected value="${$("#progress-price").val()}" >${$("#progress-price").val()}</option>`)
        $(".choices__list.choices__list--multiple").append(`<div class="choices__item choices__item--selectable" data-item="${$("#progress-price").val()}" data-id="${parseInt(selectedItems) + 1}" data-value="${$("#progress-price").val()}" data-custom-properties="null" data-deletable="" aria-selected="true">${$("#progress-price").val()}
              <button id="options__close" type="button" class="choices__button" data-button="" aria-label="Remove item: '${$("#progress-price").val()}'">
                Remove item
              </button>
            </div>`)

        result.price = parseInt($("#progress-price").val())

        $(".question h2").empty().append("How long have you been<span class='text-primary'> driving in the UAE?</span>")
        renderElement(experience, "expSection")
    })


    // Unlock Month Expiry After Selecting the Year
    $("body").on("change", "#monthSection .year", function() {
        $("#monthSection .month").prop("disabled",false)
    })

    // Select Month and Move forward to Personal Information
    $("body").on("change", "#monthSection .month", function() {
        optionName = {
            id: $("#monthSection .year").val() + " " + $(this).val(),
            title: $("#monthSection .year").val() + " " + $(this).val()
        }
        result.month = optionName
        let selectedItems = $(".choices__list.choices__list--multiple div").length

        percent += add
        $("#progressBar").css("width", `${percent}%`)
        $(".progress-main .car").css("left", `${percent - 4}%`)
        $("#choices-multiple-remove-button").append(`<option selected value="${optionName}" >${optionName}</option>`)
        $(".choices__list.choices__list--multiple").append(`<div class="choices__item choices__item--selectable" data-item="${optionName}" data-id="${parseInt(selectedItems) + 1}" data-value="${optionName}" data-custom-properties="null" data-deletable="" aria-selected="true">${optionName}
          <button id="options__close" type="button" class="choices__button" data-button="" aria-label="Remove item: '${optionName}'">
            Remove item
          </button>
        </div>`)


        $(".options").hide()
        $(".select-box").hide()
        $(".question").hide()
        $("#option-wrapper").empty()
        $(".personal-form").show()
    })





    

    




    // Search Through The Data
    $("input.choices__input").keyup(function(e) {
        let filter
        let q = e.target.value
        if ($("#option-wrapper div").attr("id") === "carSection")
            filter = q ? cars.filter(car => car.title.includes(q)) : cars
        else if ($("#option-wrapper div").attr("id") === "modelSection")
            filter = q ? models.filter(model => model.title.includes(q)) : models
        else if ($("#option-wrapper div").attr("id") === "specSection")
            filter = q ? spec.filter(spec => spec.title.includes(q)) : spec
        else if ($("#option-wrapper div").attr("id") === "cmpSection")
            filter = q ? cmpSection.filter(spec => spec.title.includes(q)) : cmpSection

        renderElement(filter, $("#option-wrapper div").attr("id"))

    })

    // Submit to get a Quote
    $(".quote .btn-submit").click(function () {
        console.log(result)
    })

})

const renderElement = (elements, section) => {
    $("#option-wrapper").empty()

    $("#option-wrapper").append(`<div id='${section}'></div>`)

    let imageSection = section === "carSection" ? `<img src="../assets/img/quote/options/option01.png">` : ''
    elements.map(element => {
        $(`#option-wrapper div#${section}`).append(`<div class="option-item ${section}" section="${section}" id="${element.id}">${imageSection}<p>${element.title}</p></div>`)
    })
}

const renderSlider = (min, max) => {
    $("#option-wrapper").empty().append("<div id='priceSection'></div>")
    let progress = `<div class="slider-container">
    <input id="slider" class="slider" type="range" min="${min}" max="${max}" value="${(max - min)/2}">
        <span class="bar"><span class="fill"></span></span>
    </div>`
    let label = `<div class='d-flex flex-row h-auto justify-content-between'><p>AED ${min}</p><p>AED ${max}</p></div>`
    let input = "<input type=\"number\" class=\"form-control progress-price\" id=\"progress-price\">\n"
    let button = `<button class="btn btn-primary px-xl-5 btn-theme btn-next">Next ></button>`

    $("#option-wrapper #priceSection").append(input, progress, label, button)
    $(".bar .fill").css("width", `${($("#slider").val() / (max-min))*100}%`);


}