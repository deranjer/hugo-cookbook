// Toggle menu with button
u('#navBarButton').on('click', function(e) {
    u('#navBarMenu').toggleClass('is-active')
})

// Hide menu on search
u('#searchButton').on('click', function(e) {
    u('#navBarMenu').removeClass('is-active')
})