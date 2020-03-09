$(function(){

        if($.adblock){
                $.confirm({
                        'title'         : 'Adblocker active!',
                        'message'       : 'You are running an ..',
                        'buttons'       : {
                                'I will!'       : {
                                        'class' : 'blue',
                                        'action': function(){
                                                // Do nothing
                                                return;
                                        }
                                },
                                'Never!'        : {
                                        'class' : 'gray',
                                        'action': function(){
                                                // Redirect to some page
                                                window.location = 'http://programacion.net/';
                                        }
                                }
                        }
                });
        }
});