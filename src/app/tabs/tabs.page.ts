import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { DrawerComponent } from '../components/drawer/drawer.component';
import { DrawerService } from '../services/drawer.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  @ViewChild(IonTabs) tabs: IonTabs;
  selected = '';

  @ViewChild(DrawerComponent) drawer: DrawerComponent;
  backdropVisible = false;

  constructor(
    private drawerService: DrawerService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.openDrawer();
  }

  setSelectedTab() {
    this.selected = this.tabs.getSelected();
  }

  openDrawer() {
    this.drawerService.drawerOpen.subscribe((drawerData) => {
      console.log(drawerData);
      if (drawerData && drawerData.open) {
        this.drawer.openDrawer(drawerData.title);
      }
    });
  }

  closeDrawer() {
    this.drawer.closeDrawer;
  }

  toggleBackdrop(isVisible) {
    this.backdropVisible = isVisible;
    this.changeDetectorRef.detectChanges();
  }
}
