import { Component, ComponentDidLoad, ComponentInterface, h, Host, Prop, State } from '@stencil/core';

interface PokeApiResult<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

interface Pokemon {
  name: string;
  url: string;
}

@Component({
  tag: 'pokemon-list',
  styleUrl: 'pokemon-list.scss',
  shadow: true,
})
export class PokemonList implements ComponentInterface, ComponentDidLoad {
  private readonly pokeBaseUrl = 'https://pokeapi.co/api/v2/';
  private itemsPerPage = 20;
  private offset = 0;

  @Prop() listTitle = 'Pokémon List';

  @State() pokemons: Pokemon[];
  @State() pokemonCount: number;

  componentDidLoad(): void {
    this.loadPage();
  }

  private loadPage(): void {
    fetch(`${this.pokeBaseUrl}pokemon?offset=${this.offset}&size=${this.itemsPerPage}`)
      .then(response => response.json())
      .then((response: PokeApiResult<Pokemon>) => {
        this.pokemons = response.results;
        this.pokemonCount = response.count;
      });
  }

  render() {
    return (
      <Host>
        <header>
          <h2>{this.listTitle}</h2>
        </header>

        {this.pokemons && this.pokemons.length
          ? <div>
            <p>Es existieren {this.pokemonCount} in der Datenbank.</p>
            <p>Folgend sind die nächsten {this.pokemons.length}.</p>

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {this.pokemons.map(pokemon =>
                  <tr>
                    <td>{pokemon.name}</td>
                  </tr>,
                )}
              </tbody>
            </table>

            <list-pagination count={this.pokemonCount} offset={this.offset} itemsPerPage={this.itemsPerPage}
                             onPaging={event => this.handlePaging(event.detail)}></list-pagination>
          </div>
          : <div>PokeApi wird befragt...</div>
        }
      </Host>
    );
  }

  private handlePaging(paging: { offset: number }): void {
    this.offset = paging.offset;
    this.loadPage();
  }
}
