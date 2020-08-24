exports.EmbedGen = function (recembed) {
    const sentembed = recembed;
    sentembed.color = 16096256;
    sentembed.footer = {
        "icon_url": "https://cdn.discordapp.com/avatars/744954751598329858/f765dbdaa43f6eb047b9e1bf4eb37f04.png",
        "text": "BentoBot by BentoBoxWorld"
    };
    sentembed.timestamp = new Date()
    return sentembed;
    };