class TrieNode {
  children: Map<string, TrieNode>;
  parent: TrieNode | null;
  isEndOfWord: boolean;

  constructor() {
    this.children = new Map();
    this.parent = null;
    this.isEndOfWord = false;
  }
}

export class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let curr = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!curr.children.has(char)) {
        curr.children.set(char, new TrieNode());
      }

      const prev = curr;
      curr = curr.children.get(char)!;
      curr.parent = prev;
    }

    curr.isEndOfWord = true;
  }

  findNode(word: string): TrieNode | null {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!currentNode.children.has(char)) {
        return null;
      }

      currentNode = currentNode.children.get(char)!;
    }

    return currentNode ?? null;
  }

  search(word: string): boolean {
    return this.findNode(word)?.isEndOfWord ?? false;
  }

  startsWith(prefix: string): boolean {
    return !!this.findNode(prefix);
  }

  delete(word: string): boolean {
    const node = this.findNode(word);

    if (!node || !node.isEndOfWord) {
      return false;
    }

    node.isEndOfWord = false;

    let currentNode = node;
    let parent = currentNode.parent;

    while (parent !== null) {
      if (currentNode.isEndOfWord || currentNode.children.size > 0) {
        break;
      }

      parent.children.delete(word[word.length - 1]);
      currentNode = parent;
      parent = currentNode.parent;
      word = word.slice(0, -1);
    }

    return true;
  }
}
