jQuery(document).ready(function ($) {

    $('.button1').hide();

    $.ajax({
        type: "GET",
        url: "https://reqres.in/api/users?page=" + 1,

        success: function (res) {
            $('.main').html('');
            for (var a = 0; a < res.data.length; a++) {
                $('.main').append(' <div class="display"> <p class="pic"> <img src="' + res.data[a].avatar + '" alt=""> </p> <p class="id">' + res.data[a].id + '</p> <p class="firstname ">' + res.data[a].first_name + '</p> <p class="lastname ">' + res.data[a].last_name + '</p> <p class="email">' + res.data[a].email + '</p> </div>');
            }

        }
    });



    $('.button2').click(function () {
        $.ajax({
            type: "GET",
            url: "https://reqres.in/api/users?page=" + 2,

            success: function (res) {
                $('.main').html('');
                for (var a = 0; a < res.data.length; a++) {
                    $('.main').append(' <div class="display"> <p class="pic"> <img src="' + res.data[a].avatar + '" alt=""> </p> <p class="id">' + res.data[a].id + '</p> <p class="firstname ">' + res.data[a].first_name + '</p> <p class="lastname ">' + res.data[a].last_name + '</p> <p class="email">' + res.data[a].email + '</p> </div>');
                }

            }
        });


        $('.button2').hide();
        $('.button1').show();
    });

    $('.button1').click(function () {
        $.ajax({
            type: "GET",
            url: "https://reqres.in/api/users?page=" + 1,

            success: function (res) {
                $('.main').html('');
                for (var a = 0; a < res.data.length; a++) {
                    $('.main').append(' <div class="display"> <p class="pic"> <img src="' + res.data[a].avatar + '" alt=""> </p> <p class="id">' + res.data[a].id + '</p> <p class="firstname ">' + res.data[a].first_name + '</p> <p class="lastname ">' + res.data[a].last_name + '</p> <p class="email">' + res.data[a].email + '</p> </div>');
                }

            }
        });

        $('.button1').hide();
        $('.button2').show();
    });

});