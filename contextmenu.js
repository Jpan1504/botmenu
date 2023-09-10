const { ActionRowBuilder, ButtonStyle, SlashCommandBuilder, EmbedBuilder, ButtonBuilder,StringSelectMenuBuilder, ActionRow, } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
  	data: new SlashCommandBuilder()
		.setName('menu')
		.setDescription('Bảng Giá'),
   const: embed = new EmbedBuilder()
		   .setColor(0x00FF00)
       .setTitle("Bảng Giá")
       .setDescription("Chọn 1 trong các món hàng để hiện giá")
	   .setFooter({ text: "by @duykhanh09103 collab with coffe store", iconURL: "https://cdn.discordapp.com/attachments/1115920216434675776/1115965662033092698/standard.gif" }),
    const: row = new ActionRowBuilder()
       .addComponents(
				new StringSelectMenuBuilder()
					.setCustomId('select')
					.setPlaceholder('chưa chọn chọn gì cả')
					.addOptions(
						{
							label: 'nitro',
							description: 'Giá nitro',
							value: 'nitro',
              emoji: "<a:nitro:1139048265132818432>",
						},
						{
							label: 'Boost server',
							description: 'nâng cấp server',
							value: 'boostserver',
              emoji: "<:like:1094989710063046656>",
						},
						{
							label: 'Paypal and Crypto',
							description: 'Giá paypal và crypto',
							value: 'paypal',
              emoji:"<:PayPal:1139217454661374063>"
						},
						{
							label: 'OwO & Ticket Patreon',
							description: 'owo',
							value: 'owo',
              emoji: "<a:owo:1106417245686595605>"
						},
						{
							label: 'Minecraft',
							description: 'giá mọi thứ liên quan minecraft',
							value: 'minecraft',
              emoji:"<a:Minecraft:1066669689989775400>"
						},
						{
							label: 'Buff members discord',
							description: 'Buff members discord',
							value: 'buffmember',
              emoji:"<:members:1137949551618171020>"
						},
            {
							label: 'Spotify Premium',
							description: 'Giá spotify',
							value: 'spotify',
              emoji:"<:Spotify:1139476934305263637>"
						},
						{
							label: 'Netflix Service',
							description: 'Giá netflix',
							value: 'netflix',
							emoji:"<:netflix:1038363874124111883>"
						},
						)
					
			)
    ,          
    async execute(interaction) {
      if(!interaction.member.roles.cache.has("1127268172211441765")){
        await interaction.deferReply()
       await interaction.editReply("Bạn đéo có quyền, cút.<a:1097815300348575764:1097815300348575764>")
	    await wait(300)
	 	await interaction.deleteReply()}
      else {
        await interaction.deferReply({ephemeral: true})
        await wait(100)
        await interaction.editReply({content:"done", ephemeral: true})
      await interaction.channel.send({ embeds: [embed], components: [row]})
     };
		
	},
};

          