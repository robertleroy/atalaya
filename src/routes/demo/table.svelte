
<p>
  Here's a table with a border, a caption, colgroups, cols, thead, tfoot, & tbody:
</p>
<table >
  <caption>This is a table caption, within &lt;caption&gt;</caption>
  <colgroup>
    <!-- <col span="2" style="border-right:1px dotted"> -->
    <col style="background: azure">
    <col style="background: HoneyDew">
    <col style="background: ivory">
  </colgroup>
  
  <thead>
    <tr>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>Table Footer 1</td>
      <td>Table Footer 2</td>
      <td>Table Footer 3</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>TD 1.1</td>
      <td>TD 1.2</td>
      <td>TD 1.3</td>
    </tr>
    <tr>
      <td>TD 2.1</td>
      <td>TD 2.2</td>
      <td>TD 2.3</td>
    </tr>
    <tr>
      <td>TD 3.1</td>
      <td>TD 3.2</td>
      <td>TD 3.3</td>
    </tr>
  </tbody>
</table>

<style>
  caption {
    /* font-size: var(--h7); */
    font-family: var(--serif);
  }
  tbody tr:nth-child(odd) {
    background-color: #cccccc40;
  }

  col:not(:last-child) {
    border-right:2px dotted #77889980;
  }

  thead {
    font-variant: small-caps;
  }
  tfoot {
    font-style: italic;
    
  }
  tfoot tr td {
    text-shadow: 2px 2px #77889980;
  }

</style>