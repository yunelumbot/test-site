---
layout: default
category: biol
title: biol
javascript: 
    - jquery-3.2.1.js
    - biol.js
---
<a onclick="clickNode('basalAngiosperms')">Basal angiosperms</a>
<div id="basalAngiosperms" style="display:none">
<ul>
<li>
    <a onclick="clickNode('amborellales')">Amborellales</a>
    <div id="amborellales" style="display:none">
    <ul>
    <li>Amborellaceae</li>
    </ul>
    </div>
</li>
<li>
    <a onclick="clickNode('nymphaeales')">Nymphaeales</a>
    <div id="nymphaeales" style="display:none">
    <ul>
    <li>Hydatellaceae</li>
    <li>Cabombaceae</li>
    <li>Nymphaeaceae</li>
    </ul>
    </div>
</li>
<li>
    <a onclick="clickNode('austrobaileyales')">Austrobaileyales</a>
    <div id="austrobaileyales" style="display:none">
    <ul>
    <li>Austrobaileyaceae</li>
    <li>Trimeniaceae</li>
    <li>Schisandraceae</li>
    </ul>
    </div>
</li>
</ul>
</div>
<a onclick="clickNode('mesangiospermae')">Mesangiospermae</a>
<div id="mesangiospermae" style="display:none">
<ul>
<li>
    <a onclick="clickNode('magnoliids')">Magnoliids</a>
    <div id="magnoliids" style="display:none">
    <ul>
    <li>
        <a onclick="clickNode('canellales')">Canellales</a>
        <div id="canellales" style="display:none">
        <ul>
        <li>Canellaceae</li>
        <li>Winteraceae</li>
        </ul>
        </div>
    </li>
    <li>
        <a onclick="clickNode('laurales')">Laurales</a>
        <div id="laurales" style="display:none">
        <ul>
        <li>Calycanthaceae</li>
        <li>Siparunaceae</li>
        <li>Gomortegaceae</li>
        <li>Atherospermataceae</li>
        <li>Hernandiaceae</li>
        <li>Monimiaceae</li>
        <li>Lauraceae</li>
        </ul>
        </div>
    </li>
    <li>Magnoliales</li>
    <li>Piperales</li>
    </ul>
    </div>
</li>
<li>Chloranthales</li>
<li>Monocots</li>
<li>Edicots</li>
</ul>
</div>
<input type="button" value="show" onClick="clickNode2()" />

作成中
