function load()
{
    tabs();
}

function tabs()
{
    $(function () {
        $('#tabs').tabs();
    });
}

function progress()
{
    $(function () {
        $('#progressbar').progressbar({
            value: 37
        });
    });
}

function animate()
{
    $(function () {
        $('#title').animate({
            left: 50,
            opacity: 1
        }, 50);
    });
}