import { CommonModule } from '@angular/common'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SelectComponent } from '../components/Select/Select.component'
import { RadioComponent } from '../components/Radio/Radio.component'
import { InputComponent } from '../components/Input/Input.component'
import { AlertComponent } from '../components/Alert/Alert.component'
import { CheckboxComponent } from '../components/Checkbox/Checkbox.component'
import { ButtonComponent } from '../components/Button/Button.component'
import { TextareaComponent } from '../components/Textarea/Textarea.component'
import { TooltipComponent } from '../components/Tooltip/Tooltip.component'
import { SpinnerComponent } from '../components/Spinner/Spinner.component'
import { ToggleComponent } from '../components/Toggle/Toggle.component'
import { TableComponent } from '../components/Table/Table.component'
import { TabsComponent } from '../components/Tabs/Tabs.component'
import { TagComponent } from '../components/Tag/Tag.component'
import { AccordionComponent } from '../components/Accordion/Accordion.component'
import { DialogComponent } from '../components/Dialog/Dialog.component'
import { LinkComponent } from '../components/Link/Link.component'
import { CardComponent } from '../components/Card/Card.component'
import { PaginationComponent } from '../components/Pagination/Pagination.component'
import { DropdownComponent } from '../components/Dropdown/Dropdown.component'
import { GridComponent } from '../components/Grid/Grid.component'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AlertComponent,
    SelectComponent,
    RadioComponent,
    InputComponent,
    LinkComponent,
    CheckboxComponent,
    ButtonComponent,
    PaginationComponent,
    TextareaComponent,
    ToggleComponent,
    TooltipComponent,
    SpinnerComponent,
    TableComponent,
    TabsComponent,
    TagComponent,
    DropdownComponent,
    DialogComponent,
    CardComponent,
    GridComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  exports: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
