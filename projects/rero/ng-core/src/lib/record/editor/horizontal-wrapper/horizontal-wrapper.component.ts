/*
 * RERO angular core
 * Copyright (C) 2020 RERO
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, version 3 of the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'ng-core-horizontal-wrapper',
  template: `
    <div class="form-group">
      <div class="row">
        <label [attr.for]="id" class="col-sm-2 col-form-label" *ngIf="to.label" [tooltip]="to.description">
          {{ to.label }}
          <ng-container *ngIf="to.required && to.hideRequiredMarker !== true">*</ng-container>
        </label>
        <div class="col-sm-10">
          <ng-template #fieldComponent></ng-template>
        </div>
      </div>
      <div *ngIf="showError" class="row invalid-feedback d-block">
        <formly-validation-message [field]="field"></formly-validation-message>
      </div>
    </div>
  `,
})
export class HorizontalWrapperComponent extends FieldWrapper {

}