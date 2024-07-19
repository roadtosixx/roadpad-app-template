
RegisterNUICallback('sendNotification', function(data, cb)

    local notifyData = {
        apptitle = "Settings",
        title = "No message",
        message = data.message,
        img = "/public/img/app/Apps/settingsapp.png"
    }
    
    exports["roadpad"]:sendNotification(notifyData)
    cb('ok')
end)


