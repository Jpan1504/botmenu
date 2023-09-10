const { StringSelectMenuBuilder,AttachmentBuilder,Events, Client, ButtonBuilder, ButtonStyle, ActionRow, ActionRowBuilder, EmbedBuilder, ButtonInteraction } = require("discord.js")
const wait = require('node:timers/promises').setTimeout;
module.exports = {
  name: 'interactionCreate',
  async execute(interaction, client) {
      const acctach = new AttachmentBuilder()
      .setFile(__dirname +'/../IMG_1340.jpg')
		const minecraft = new EmbedBuilder()
                  .setColor(0x00FF00)
                  .setTitle("Minecraft")
                  .setDescription("Chọn để hiện giá acc/ rank/ comestic/ client liên quan đến minecraft")
                  .setFooter({ text: "by @duykhanh09103 collab with coffe store", iconURL: "https://cdn.discordapp.com/attachments/1115920216434675776/1115965662033092698/standard.gif" })
          const minecraftrow = new ActionRowBuilder()
              .addComponents(
                  new StringSelectMenuBuilder()
                  .setCustomId('mcrow')
                  .setPlaceholder('bạn chưa chọn chọn gì cả')
                  .addOptions(
                        {
                              label: 'Minecraft Account  ',
                              description: 'Giá acc Minecraft  ',
                              value: 'minecraftacc',
                              emoji: "<a:Minecraft:1066669689989775400>",
                        },
                        {
                              label: 'Rank / Comestic / Client  ',
                              description: 'Giá Rank / Comestic / Client ',
                              value: 'minecraftrank',
                              emoji: "<:PriceTag_USD:1139478074119958548>",
                        },
                  )

              )
      const nitrorow = new ActionRowBuilder()
            .addComponents(
                  new StringSelectMenuBuilder()
                        .setCustomId('nitroroww')
                        .setPlaceholder('bạn chưa chọn chọn gì cả')
                        .addOptions(
                              {
                                    label: 'Nitro Trial',
                                    description: 'Giá Nitro Trial  ',
                                    value: 'nitrotrial',
                                    emoji: "<a:nitro_boost:1139029239316873357>",
                              },
                              {
                                    label: 'Nitro Login',
                                    description: 'Giá Nitro Login  ',
                                    value: 'nitrologin',
                                    emoji: "<a:nitro:1139029560906756167>",
                              },
                              {
                                    label: 'Nitro Link Gift',
                                    description: 'Giá Nitro Link Gift  ',
                                    value: 'nitrogift',
                                    emoji: "<a:nitro:1139048265132818432>",
                              },
                        )
            )
            const nitroembed = new EmbedBuilder()
                  .setColor(0x00FF00)
                  .setTitle("Bảng giá Nitro")
                  .setDescription("Chọn để hiện giá Nitro")
                  .setFooter({ text: "by @duykhanh09103 collab with coffe store", iconURL: "https://cdn.discordapp.com/attachments/1115920216434675776/1115965662033092698/standard.gif" })
	if (!interaction.isStringSelectMenu()) return;
    const selected = interaction.values[0];
 
    if (interaction.customId === 'select') {
      if (selected === 'nitro') {
        await interaction.deferReply({ ephemeral: true });
        await wait(100)
		await interaction.editReply({components:[nitrorow],embeds:[nitroembed], ephemeral: true,});
	} else if (selected === 'boostserver') {
        await interaction.deferReply({ ephemeral: true });
        await wait(100)
		await interaction.editReply({content:"<a:Boost:1132346528384696394>  **Boost Server (Nâng cấp)**\n<:Heart_Boost:957642444634194040> **LEVEL 1** | 50k :bank: / 2,5$ <:PayPal:1139217454661374063> \n<:Heart_Boost:957642444634194040> **LEVEL 2** | 150k :bank: / 7$ <:PayPal:1139217454661374063> \n<:Heart_Boost:957642444634194040> **LEVEL 3** (MAX) | 250k :bank: / 12$ <:PayPal:1139217454661374063>\n<:pnv_check:928384404068376576> **Boost** có thời hạn là **3 tháng**.\n⛔️ **Không** bảo hành với các trường hợp **Kick/ban acc boost**.", ephemeral: true});
	} else if (selected === 'paypal') {
        await interaction.deferReply({ephemeral: true });
        await wait(100)
		await interaction.editReply({content:"💵  **Paypal & Crypto** \n<:PayPal:1139217454661374063> 24k = 1$\n<:LTC:1139217690549035180> 26k = 1$", ephemeral: true});
	} else if (selected === 'owo') {
        await interaction.deferReply({ ephemeral: true });
        await wait(100)
		await interaction.editReply({content:`<:OwO:1106417245686595605> **OwO & Ticket Patreon**
            <:A_Cowoncy:916388615960002631> **1m** = 10k 🏦 / 0,5$ <:PayPal:1139217454661374063> 
            - Mua số lượng lớn có giảm!
            \n
            🎟️ **3 ticket** | 90k 🏦 | 4$ <:PayPal:1139217454661374063>
            - **Gift thẳng** vào account của bạn`, ephemeral: true});
	}  else if (selected === 'minecraft') {
        await interaction.deferReply({ ephemeral: true });
        await wait(100)
		await interaction.editReply({embeds: [minecraft],components:[minecraftrow], ephemeral: true});
	}  else if (selected === 'buffmember') {
        await interaction.deferReply({ ephemeral: true });
        await wait(100)
		await interaction.editReply({content:`<:members:1137949551618171020> **Buff members discord**\n<:6149_discord:1133797017794134138> **1000 members offline**\n- 50k 🏦 / 2,5$ <:PayPal:1139217454661374063>\n<:6149_discord:1133797017794134138> **1000 members online**\n- 100k 🏦 / 4,5$ <:PayPal:1139217454661374063>`, ephemeral: true});
	}  else if (selected === 'spotify') {
        await interaction.deferReply({ ephemeral: true });
        await wait(100)
		await interaction.editReply({content:`<:Spotify:1139476934305263637> **Spotify Premium**
            <a:CB_dance_cat:430423973554159629> **1 Month (Tháng)** 35k 🏦 / 1,5$ <:PayPal:1139217454661374063>
            <a:CB_dance_cat:430423973554159629> **3 Months (Tháng)** 80k 🏦 / 3,8$ <:PayPal:1139217454661374063> 
            <a:CB_dance_cat:430423973554159629> **6 Months (Tháng)** 160k 🏦 / 7,5$ <:PayPal:1139217454661374063> 
            <a:CB_dance_cat:430423973554159629> **1 Year (Năm)** 300k 🏦 / 14$ <:PayPal:1139217454661374063>`, ephemeral: true});
	}  else if (selected === 'netflix') {
        await interaction.deferReply({ ephemeral: true });
        await wait(100)
		await interaction.editReply({content:`<:netflix:1132010353753079928> **Netflix Service**\n- <a:FS_moneywave:1089796281548935198> **Share Account**\n<a:pnv_luclaluclac:888897080511332444> **1 Month (Tháng)** 45k 🏦 / 2$ <:PayPal:1139217454661374063>\n- <:pnv_check:928384404068376576> **Main Account (Chính chủ)**\n<a:pnv_luclaluclac:888897080511332444> **1 Month (Tháng)** 70k 🏦 / 3,2$ <:PayPal:1139217454661374063>`, ephemeral: true});
	}
  

 }
 if (interaction.customId === 'mcrow') {
      if (selected === 'minecraftacc') {
        await interaction.deferReply({ ephemeral: true });
        await wait(100)
        await interaction.editReply({content:`  <a:Minecraft:1066669689989775400> **Minecraft FA Unbanned**\n- 250k 🏦  / 12$ <:PayPal:1139217454661374063>\n🔑  **New Account/Key Reddem**\n- 500k 🏦 / 23$ <:PayPal:1139217454661374063> \n<:PriceTag_USD:1139478074119958548> **Minecraft Dungeons / Minecraft Legends**\nOrder 👉 <#1106588144926732442>`,ephemeral:true})
 }
     if(selected === "minecraftrank"){
      await interaction.deferReply({ ephemeral: true });
      await wait(100)
      await interaction.editReply({ephemeral:true, content:`**Rank / Comestic / Client**
      - Tính 25k = 1$ x (số $ đơn hàng) 
      **Order loại acc có rank/comestic vui lòng tạo <#1106588144926732442> để biết thêm chi tiết.**`,files:[acctach]})
     }
   }
   if (interaction.customId === "nitroroww"){
       if(selected === "nitrotrial"){
        await interaction.deferReply({ ephemeral: true });
        await wait(100)
        await interaction.editReply({content:`<a:nitro_boost:1139029239316873357>  **Nitro Trial**
        70k 🏦 / 3$ <:PayPal:1139217454661374063>
        <:pnv_check:928384404068376576> **Acc Discord** phải trên 1 tháng tuổi, chưa đăng kí **Nitro Boost** lần nào.`,ephemeral:true})
       }
       if(selected === "nitrologin"){
            await interaction.deferReply({ ephemeral: true });
            await wait(100)
            await interaction.editReply({content:`🚫 **Tạm thời chưa bán**`,ephemeral:true})
           }
           if(selected === "nitrogift"){
            await interaction.deferReply({ ephemeral: true });
            await wait(100)
            await interaction.editReply({content:`<a:nitro:1139048265132818432> **Nitro Link Gift**
            **1 Month (Tháng)**
            <a:nitro_classic:1139029560906756167>  **Nitro Basic** 40k 🏦 / 2$ <:PayPal:1139217454661374063> 
            <a:nitro_boost:1139029239316873357>  **Nitro Boost** 80k 🏦 / 4$ <:PayPal:1139217454661374063> 
            **1 Year (Năm)**
            <a:nitro_classic:1139029560906756167>  **Nitro Basic** 390k 🏦 / 18$ <:PayPal:1139217454661374063> 
            <a:nitro_boost:1139029239316873357>  **Nitro Boost** 780k 🏦 / 36$ <:PayPal:1139217454661374063>`,ephemeral:true})
           }
   }
    }
  }
;