import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements AfterViewInit {

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    const navContainer = this.renderer.selectRootElement('#nav', true)
    const navLinks = navContainer.getElementsByClassName('nav-link')

    for (let i = 0; i < navLinks.length; i++) {
      this.renderer.listen(navLinks[i], 'click', (event) => {
        const current = navContainer.getElementsByClassName('active')
        if (current.length > 0) {
          this.renderer.removeClass(current[0], 'active')
        }
        this.renderer.addClass(event.target, 'active')
      })
    }
  }

}
