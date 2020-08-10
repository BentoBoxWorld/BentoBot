exports.EmbedGen = function (recembed) {
    const sentembed = recembed;
    sentembed.color = 16096256;
    sentembed.footer = {
        "icon_url": "https://cdn.discordapp.com/avatars/740219687459356792/fb089387bba8587e43092557055d6cc4.png",
        "text": "BentoBot"
    };
    sentembed.timestamp = new Date()
    return sentembed;
    };