import { Component } from '@angular/core';
import { LogoLightIco } from "../../shared/icons/logo-light";
import { FacebookIco } from "../../shared/icons/facebook";
import { TiktokIco } from "../../shared/icons/tiktok";
import { InstagramIco } from "../../shared/icons/instagram";
import { YoutubeIco } from "../../shared/icons/youtube";
import { LinkdingIco } from "../../shared/icons/linkding";
import { ContactIco } from "../../shared/icons/contact";
import { WhatsappIco } from "../../shared/icons/whatsapp";

@Component({
  selector: 'app-footer',
  imports: [LogoLightIco, FacebookIco, TiktokIco, InstagramIco, YoutubeIco, LinkdingIco, ContactIco, WhatsappIco],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

}
