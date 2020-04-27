import {
  Component,
  ComponentInterface,
  ComponentWillLoad,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
} from '@stencil/core';

@Component({
  tag: 'list-pagination',
  styleUrl: 'list-pagination.scss',
  shadow: true,
})
export class ListPagination implements ComponentInterface, ComponentWillLoad {
  @State() private totalPages: number;
  @State() private currentPage: number;
  @State() private previousPage: number | undefined;
  @State() private nextPage: number | undefined;

  /**
   * The count of all items in the list.
   */
  @Prop() count: number;

  /**
   * How much items per page shall be shown in the list?
   */
  @Prop() itemsPerPage: number;

  /**
   * The current offset of the list.
   */
  @Prop() offset: number;

  /**
   * Emits, when a paging is triggered.
   */
  @Event() paging: EventEmitter<{ offset: number, itemsPerPage: number }>;

  private handleClick(offset: number): void {
    this.paging.emit({ offset, itemsPerPage: this.itemsPerPage });
    this.offset = offset;
    this.calculate();
  }

  private calculate(): void {
    this.totalPages = Math.ceil(this.count / this.itemsPerPage);
    this.currentPage = Math.floor(this.offset / this.itemsPerPage) + 1;
    this.previousPage = this.currentPage - 1 <= 0 ? undefined : this.currentPage - 1;
    this.nextPage = this.currentPage + 1 >= this.totalPages ? undefined : this.currentPage + 1;
  }

  componentWillLoad(): void {
    this.calculate();
  }

  render() {
    return (
      <Host>
        <ul>
          <li onClick={() => this.handleClick(0)}>&laquo;</li>

          {
            this.previousPage &&
            <li onClick={() => this.handleClick(this.offset - this.itemsPerPage)}>{this.previousPage}</li>
          }

          <li class="current">{this.currentPage}</li>

          {
            this.nextPage &&
            <li onClick={() => this.handleClick(this.offset + this.itemsPerPage)}>{this.nextPage}</li>
          }

          <li onClick={() => this.handleClick(this.count - this.itemsPerPage)}>&raquo;</li>
        </ul>
      </Host>
    );
  }
}
