import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { ApiVersionToastMessageModule } from '../api-version-toast-message/api-version-toast-message.module';
import { DirectiveModule } from '../../directive.module';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [CommonModule, SharedModule, DirectiveModule, ApiVersionToastMessageModule],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
